import re
from playwright.sync_api import Page, expect

def test_calculator_smoke(page: Page):
    # 1. Navigate to your live site
    page.goto("https://www.berlintransportationguide.com")

    # 2. Check if the page title is correct
    # Use a regex that matches "Berlin Transportation" anywhere in the title
    expect(page).to_have_title(re.compile("Berlin Transportation"))

    # 3. Enter '10' into the KM input field
    # (We use the placeholder text to find the input)
    page.get_by_placeholder("How many KM?").fill("10")

    # 4. Click the "Calculate Impact" button
    page.get_by_role("button", name="Calculate Impact").click()

    # 5. VERIFY THE RESULT: Look for the 'Your Trip Impact' success box
    # This proves the React frontend and AWS backend are talking!
    success_message = page.get_by_text("Your Trip Impact")
    expect(success_message).to_be_visible()

    # 6. Verify the math (10km * 150g = 1500g)
    expect(page.get_by_text("1,500g")).to_be_visible()