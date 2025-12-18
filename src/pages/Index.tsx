const Index = () => {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: '#f8f6f2', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1a5fb4', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontFamily: "'Space Grotesk', sans-serif" }}>
          Berlin Transportation Guide
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          New to Berlin? Learn how to get around the city using public transport.
        </p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Transport Types Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a2e' }}>
            Types of Transport
          </h2>

          {/* U-Bahn */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ backgroundColor: '#1a5fb4', color: 'white', padding: '6px 16px', borderRadius: '20px', fontWeight: '600' }}>U-Bahn</span>
              <span style={{ color: '#666' }}>Underground Metro</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              The U-Bahn is Berlin's underground train system. It has <strong>10 lines</strong> (U1-U9, U55) and runs throughout the city center. 
              Trains come every 3-5 minutes during the day. Look for the blue "U" signs at stations.
            </p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '8px' }}>
              <strong>Best for:</strong> Getting around central Berlin quickly
            </p>
          </div>

          {/* S-Bahn */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '6px 16px', borderRadius: '20px', fontWeight: '600' }}>S-Bahn</span>
              <span style={{ color: '#666' }}>City Rail</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              The S-Bahn is the city rail that connects Berlin with outer neighborhoods and nearby towns. 
              It has <strong>16 lines</strong> and covers a wider area than the U-Bahn. Look for the green "S" signs.
            </p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '8px' }}>
              <strong>Best for:</strong> Traveling to airports, suburbs, and across the city
            </p>
          </div>

          {/* Tram */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ backgroundColor: '#dc3545', color: 'white', padding: '6px 16px', borderRadius: '20px', fontWeight: '600' }}>Tram</span>
              <span style={{ color: '#666' }}>Straßenbahn</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              Trams run mostly in <strong>East Berlin</strong>. They travel on tracks along the streets and are great for shorter trips. 
              The M-lines (like M10) are the most frequent. You can see where you're going!
            </p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '8px' }}>
              <strong>Best for:</strong> Short trips in eastern neighborhoods like Prenzlauer Berg, Mitte
            </p>
          </div>

          {/* Bus */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ backgroundColor: '#7b4397', color: 'white', padding: '6px 16px', borderRadius: '20px', fontWeight: '600' }}>Bus</span>
              <span style={{ color: '#666' }}>City Bus</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              Buses go everywhere in Berlin, especially to places without train stations. 
              The yellow double-decker buses are famous! Night buses (N-lines) run when trains stop.
            </p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '8px' }}>
              <strong>Best for:</strong> Areas without train stations, night travel
            </p>
          </div>
        </section>

        {/* Tickets Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a2e' }}>
            Tickets & Zones
          </h2>
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#1a1a2e' }}>Berlin has 3 zones:</h3>
            <ul style={{ color: '#444', lineHeight: '2', paddingLeft: '20px' }}>
              <li><strong>Zone A</strong> – City center (inside the S-Bahn ring)</li>
              <li><strong>Zone B</strong> – Outer city (most of Berlin)</li>
              <li><strong>Zone C</strong> – Surrounding areas (including Potsdam and Schönefeld)</li>
            </ul>
            
            <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '16px', color: '#1a1a2e' }}>Common tickets:</h3>
            <ul style={{ color: '#444', lineHeight: '2', paddingLeft: '20px' }}>
              <li><strong>Single ticket (AB)</strong> – €3.50, valid for 2 hours</li>
              <li><strong>Day ticket (AB)</strong> – €9.50, unlimited rides for one day</li>
              <li><strong>Monthly pass (AB)</strong> – €99, best value for daily commuters</li>
            </ul>
            
            <p style={{ backgroundColor: '#fff3cd', padding: '16px', borderRadius: '8px', marginTop: '20px', color: '#856404' }}>
              <strong>⚠️ Important:</strong> Always validate your ticket before boarding! You can buy tickets from machines at stations or using the BVG app.
            </p>
          </div>
        </section>

        {/* Google Maps Guide */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a2e' }}>
            Using Google Maps
          </h2>
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <p style={{ color: '#444', marginBottom: '20px', lineHeight: '1.6' }}>
              Google Maps works great in Berlin! Here's how to use it:
            </p>
            
            <ol style={{ color: '#444', lineHeight: '2.2', paddingLeft: '20px' }}>
              <li>Open Google Maps on your phone</li>
              <li>Type your destination in the search bar</li>
              <li>Tap <strong>"Directions"</strong></li>
              <li>Select the <strong>train/bus icon</strong> 🚆 for public transport</li>
              <li>Choose a route – it shows U-Bahn, S-Bahn, tram, and bus options</li>
              <li>Follow the step-by-step directions!</li>
            </ol>

            <div style={{ backgroundColor: '#e8f4f8', padding: '16px', borderRadius: '8px', marginTop: '20px' }}>
              <strong style={{ color: '#1a5fb4' }}>💡 Tip:</strong>
              <span style={{ color: '#444' }}> The BVG app and Google Maps both show real-time delays. Check before you leave!</span>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a2e' }}>
            Quick Tips
          </h2>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              ✅ Trains run 24/7 on weekends (Friday and Saturday nights)
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              ✅ Download the BVG app for tickets and real-time info
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              ✅ AB ticket is enough for most trips within Berlin
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              ✅ Stand on the right side of escalators, walk on the left
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a1a2e', color: '#aaa', padding: '40px 20px', textAlign: 'center', marginTop: '40px' }}>
        <p>Berlin Transportation Guide – Made for newcomers to Berlin</p>
      </footer>
    </div>
  );
};

export default Index;
