const CTA_HREF = "mailto:info@triexmanagement.com?subject=Property%20Management%20Inquiry";
const CTA_LABEL = "Talk to a property manager";

const services = [
  ["01", "Careful tenant placement", "A five-point screening process reviews credit, income, criminal background, collections, and rental history."],
  ["02", "Less vacancy, more visibility", "Vacancies are marketed across 25+ websites, with every new prospect followed up within 24 hours."],
  ["03", "Clear records at every turn", "Detailed move-in and move-out photos, consistent owner statements, archived documents, and year-end 1099s."],
  ["04", "Maintenance that answers", "Tenants can request service online, while urgent issues are covered by a 24/7 emergency maintenance line."],
];

const faqs = [
  ["What properties does TriEx manage?", "Single-family homes and apartment communities under 75 units throughout Reno and Sparks."],
  ["Does TriEx sell real estate?", "No. TriEx has no brokerage sales operation. The team focuses exclusively on property management."],
  ["How do owners access reports?", "The mobile-optimized owner portal keeps statements, transactions, leases, agreements, correspondence, and tax documents available 24/7."],
  ["What happens after office hours?", "A dedicated emergency line is available around the clock for urgent maintenance, including plumbing leaks."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="TriEx Management home">
          <img src="/images/triex-management-logo-only-586b68e328.png" alt="TriEx Management" />
        </a>
        <div className="navLinks">
          <a href="#difference">Why TriEx</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button buttonSmall" href={CTA_HREF}>{CTA_LABEL}</a>
      </nav>

      <header className="hero" id="top">
        <img className="heroImage" src="/images/image-asset-52f0524e47.jpeg" alt="A welcoming Reno-Sparks home managed with care" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">Reno-Sparks property management</p>
          <h1>Local stewardship.<br /><em>Lasting peace of mind.</em></h1>
          <p className="heroCopy">A boutique, family-owned team focused on one thing: managing your property as carefully as you would.</p>
          <a className="button" href={CTA_HREF}>{CTA_LABEL}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="heroNote"><span>Serving Northern Nevada</span><strong>Since the mid-1980s</strong></div>
      </header>

      <div className="proofBar" aria-label="TriEx at a glance">
        <span><b>40± years</b> of local roots</span>
        <span><b>100%</b> property management focused</span>
        <span><b>24/7</b> emergency maintenance</span>
        <span><b>Every manager</b> Nevada licensed + permitted</span>
      </div>

      <section className="story section" id="difference">
        <div className="storyVisual">
          <img src="/images/image-asset-4bcc4a73c7.jpeg" alt="The Reno-Sparks landscape TriEx calls home" />
          <div className="stamp"><span>LOCAL</span><b>NV</b><span>ROOTS</span></div>
        </div>
        <div className="storyCopy">
          <p className="eyebrow">Built here. Still here.</p>
          <h2>Property care shaped by <em>four decades</em> in Reno-Sparks.</h2>
          <p>TriEx is family owned, not part of a national chain. Many on the team were born here or have called Northern Nevada home for more than a decade. That history means practical market knowledge and long-standing vendor relationships when your property needs attention.</p>
          <div className="pullquote">“We appreciate the responsibility handed to us by every owner and every tenant.”</div>
          <a className="textCta" href={CTA_HREF}>{CTA_LABEL} <span>→</span></a>
        </div>
      </section>

      <section className="specialist section" id="services">
        <div className="sectionHeading">
          <div><p className="eyebrow">The boutique advantage</p><h2>No sales agenda.<br /><em>Just expert management.</em></h2></div>
          <p>TriEx exclusively manages single-family homes and apartment communities under 75 units. Every system is designed around protecting the property, serving the tenant, and keeping the owner informed.</p>
        </div>
        <div className="serviceLayout">
          <img src="/images/image-asset-bca2be0046.jpeg" alt="A thoughtfully maintained residential property" />
          <div className="serviceList">
            {services.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="emergency">
        <img src="/images/image-asset-87bcd3f520.jpeg" alt="A comfortable home supported by responsive tenant service" />
        <div className="emergencyContent">
          <p className="eyebrow light">When it cannot wait</p>
          <h2>Real help,<br /><em>around the clock.</em></h2>
          <p>Tenants can submit routine requests online. For urgent problems, TriEx maintains a dedicated 24/7 emergency maintenance line, backed by trusted local vendors and preferred scheduling built over decades.</p>
          <div className="phone"><span>24/7 Maintenance Emergency</span><a href="tel:+17753918088">(775) 391-8088</a></div>
          <a className="button pale" href={CTA_HREF}>{CTA_LABEL}<span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="team section" id="team">
        <div className="sectionHeading teamHeading">
          <div><p className="eyebrow">Qualified by design</p><h2>Licensed professionals.<br /><em>Accountable service.</em></h2></div>
          <p>Every member of the leadership and property management team holds a Nevada real estate license with a Property Management Permit.</p>
        </div>
        <div className="teamGrid">
          <article><img src="/images/dan-adj-bw-8d010c3b9a.jpg" alt="Dan Lorenz, Owner and Broker" /><div><span>Owner / Broker</span><h3>Dan Lorenz</h3><p>B.S., University of Nevada · MBA<br />Broker + Property Management Permit</p></div></article>
          <article><img src="/images/stb-b-w-5ed2d90a6f.jpg" alt="Steve Bezick, Vice President of Operations" /><div><span>VP of Operations</span><h3>Steve Bezick</h3><p>B.S. Economics + B.S. Finance<br />Broker/Salesperson + PM Permit</p></div></article>
          <article><img src="/images/img_2180-cd2170da06.jpeg" alt="Megan Sredy, Director of Property Management" /><div><span>Director of Property Management</span><h3>Megan Sredy</h3><p>Reno born and raised<br />Salesperson + PM Permit</p></div></article>
        </div>
      </section>

      <section className="portal section">
        <div className="portalCopy">
          <p className="eyebrow">Your property, within reach</p>
          <h2>Clarity from anywhere.</h2>
          <p>The owner portal brings distributions, contributions, bills, statements, leases, correspondence, and tax documents into one mobile-friendly place, available 24/7.</p>
          <ul><li>Predictable reporting schedule</li><li>Electronic owner distributions via ACH</li><li>Documents archived for tax time or refinancing</li></ul>
          <a className="textCta" href={CTA_HREF}>{CTA_LABEL} <span>→</span></a>
        </div>
        <img src="/images/image-asset-db66d578b3.jpeg" alt="Owner reviewing property information online" />
      </section>

      <section className="faq section" id="faq">
        <div className="faqImage"><img src="/images/te-on-building-01-16-20-a81a951d13.jpg" alt="TriEx Management office on West Moana Lane in Reno" /><div><span>Visit us</span>675 W. Moana Lane<br />Suite 200 · Reno, NV</div></div>
        <div className="faqCopy">
          <p className="eyebrow">Good to know</p><h2>Frequently asked<br /><em>questions.</em></h2>
          <div className="questions">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="finalCta">
        <img src="/images/image-asset-a0694ef888.jpeg" alt="Reno neighborhood at the foot of the Sierra Nevada" />
        <div><p className="eyebrow light">A better-managed property starts here</p><h2>Let local experience<br /><em>work for you.</em></h2><a className="button pale" href={CTA_HREF}>{CTA_LABEL}<span aria-hidden="true">↗</span></a></div>
      </section>

      <footer><a className="footerBrand" href="#top">TriEx Management</a><p>Family-owned property management for Reno-Sparks.</p><div><a href="tel:+17753230404">(775) 323-0404</a><a href="mailto:info@triexmanagement.com">info@triexmanagement.com</a></div><small>© 2026 TriEx Management · A member of the TriEx Real Estate Group of Companies</small><img className="eho" src="/images/fheo50-2a4320801b.gif" alt="Equal Housing Opportunity" /></footer>

      <style>{`
        :root{--ink:#162824;--green:#244d40;--sage:#b6c3a7;--cream:#f3efe6;--rust:#bd5e3e;--white:#fff}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}.nav{height:88px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;background:#f8f5ee;position:relative;z-index:10}.brand img{width:78px;height:auto}.navLinks{display:flex;gap:30px;font-size:12px;text-transform:uppercase;letter-spacing:.13em}.navLinks a:hover{color:var(--rust)}.button{display:inline-flex;align-items:center;justify-content:space-between;gap:28px;background:var(--rust);color:#fff;padding:17px 21px;text-transform:uppercase;font-weight:700;letter-spacing:.09em;font-size:11px;min-width:230px}.button:hover{background:#9d482e}.buttonSmall{min-width:auto;padding:13px 17px}.hero{min-height:690px;height:calc(100vh - 88px);position:relative;display:flex;align-items:center;color:white;overflow:hidden}.heroImage,.heroShade{position:absolute;inset:0;width:100%;height:100%}.heroShade{background:linear-gradient(90deg,rgba(10,30,25,.88) 0%,rgba(10,30,25,.42) 57%,rgba(10,30,25,.05) 100%)}.heroContent{position:relative;z-index:1;margin-left:8vw;max-width:750px}.eyebrow{text-transform:uppercase;letter-spacing:.2em;font-size:11px;font-weight:700;color:var(--rust);margin:0 0 22px}.eyebrow.light{color:#d4dcbf}.hero h1,.section h2,.emergency h2,.finalCta h2{font-family:Georgia,serif;font-weight:400;font-size:clamp(50px,6.8vw,96px);line-height:.94;letter-spacing:-.045em;margin:0}.hero h1 em,h2 em{font-weight:400;color:#d3dbc1}.heroCopy{font-family:Georgia,serif;font-size:19px;line-height:1.6;max-width:570px;margin:28px 0 34px}.heroNote{position:absolute;z-index:2;right:4vw;bottom:35px;border-left:1px solid rgba(255,255,255,.6);padding-left:18px;display:flex;flex-direction:column;text-transform:uppercase;font-size:10px;letter-spacing:.15em}.heroNote strong{font-family:Georgia,serif;text-transform:none;letter-spacing:0;font-size:20px;margin-top:6px}.proofBar{background:var(--ink);color:white;padding:22px 5vw;display:flex;justify-content:space-between;gap:25px;text-transform:uppercase;letter-spacing:.1em;font-size:10px}.proofBar b{color:#d6dec5;font-size:13px;margin-right:4px}.section{padding:120px 7vw}.story{display:grid;grid-template-columns:1.05fr .95fr;gap:9vw;align-items:center}.storyVisual{position:relative}.storyVisual img{height:650px}.stamp{position:absolute;right:-55px;bottom:50px;background:var(--rust);color:white;width:112px;height:112px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;letter-spacing:.18em;font-size:9px}.stamp b{font-family:Georgia,serif;font-size:30px;letter-spacing:0}.story h2,.specialist h2,.team h2,.portal h2,.faq h2{font-size:clamp(42px,5vw,70px)}.story h2 em,.specialist h2 em,.team h2 em,.faq h2 em{color:var(--green)}.storyCopy>p:not(.eyebrow),.sectionHeading>p,.portalCopy>p:not(.eyebrow),.faq p{font-family:Georgia,serif;line-height:1.7;font-size:17px;color:#44534f}.pullquote{border-left:3px solid var(--rust);padding:5px 0 5px 24px;font-family:Georgia,serif;font-style:italic;font-size:20px;line-height:1.5;margin:32px 0}.textCta{display:inline-block;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:700;border-bottom:1px solid;padding-bottom:7px}.textCta span{margin-left:14px}.specialist{background:#e3e6d9}.sectionHeading{display:grid;grid-template-columns:1.2fr .8fr;gap:12vw;align-items:end;margin-bottom:65px}.sectionHeading>p{margin:0}.serviceLayout{display:grid;grid-template-columns:.9fr 1.1fr;gap:6vw}.serviceLayout>img{height:650px}.serviceList article{display:grid;grid-template-columns:52px 1fr;gap:20px;border-top:1px solid #acb5a6;padding:24px 0}.serviceList article>span{font-family:Georgia,serif;color:var(--rust)}h3{font-family:Georgia,serif;font-size:23px;font-weight:400;margin:0 0 8px}.serviceList p{margin:0;color:#52605c;line-height:1.55;font-size:14px}.emergency{background:var(--green);color:#fff;display:grid;grid-template-columns:1fr 1fr}.emergency>img{height:100%;min-height:670px}.emergencyContent{padding:100px 8vw;align-self:center}.emergency h2{font-size:clamp(48px,5.6vw,80px)}.emergencyContent>p:not(.eyebrow){font-family:Georgia,serif;line-height:1.7;color:#dce3da;font-size:17px}.phone{border-top:1px solid #6d887f;border-bottom:1px solid #6d887f;padding:22px 0;margin:28px 0;display:flex;justify-content:space-between;align-items:center}.phone span{font-size:10px;text-transform:uppercase;letter-spacing:.15em}.phone a{font-family:Georgia,serif;font-size:22px}.button.pale{background:#d5ddc6;color:var(--ink)}.button.pale:hover{background:white}.team{background:#f8f5ee}.teamHeading{align-items:center}.teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px}.teamGrid article{background:var(--ink);color:white}.teamGrid img{height:390px;filter:grayscale(1)}.teamGrid article div{padding:25px}.teamGrid span{color:#bbc7ad;text-transform:uppercase;letter-spacing:.13em;font-size:9px}.teamGrid h3{font-size:27px;margin:9px 0}.teamGrid p{color:#b7c1bd;font-size:12px;line-height:1.6;margin:0}.portal{display:grid;grid-template-columns:.85fr 1.15fr;gap:8vw;align-items:center}.portal>img{height:570px}.portalCopy>p:not(.eyebrow){margin:25px 0}.portal ul{padding:0;list-style:none;margin:30px 0}.portal li{border-top:1px solid #c8c4b9;padding:14px 0;font-size:12px;text-transform:uppercase;letter-spacing:.08em}.faq{background:#e3e6d9;display:grid;grid-template-columns:.85fr 1.15fr;gap:8vw;align-items:center}.faqImage{position:relative}.faqImage img{height:650px}.faqImage div{position:absolute;bottom:0;left:0;background:var(--rust);color:white;padding:23px 28px;font-family:Georgia,serif;line-height:1.5}.faqImage span{display:block;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:.15em;font-size:9px;margin-bottom:7px}.questions{margin-top:40px}.questions details{border-top:1px solid #abb4a6;padding:19px 0}.questions details:last-child{border-bottom:1px solid #abb4a6}.questions summary{cursor:pointer;list-style:none;font-family:Georgia,serif;font-size:18px;display:flex;justify-content:space-between}.questions summary span{color:var(--rust);font-family:Arial,sans-serif}.questions details p{font-size:14px;margin:14px 35px 0 0}.finalCta{height:610px;position:relative;color:white;display:flex;align-items:center;justify-content:center;text-align:center}.finalCta>img{position:absolute;inset:0;width:100%;height:100%;filter:brightness(.35)}.finalCta>div{position:relative}.finalCta h2{font-size:clamp(48px,6vw,84px);margin-bottom:35px}.finalCta .button{margin:auto}footer{background:#10211d;color:#cad4cf;padding:60px 6vw 35px;display:grid;grid-template-columns:1.3fr 1fr 1fr auto;gap:30px;align-items:start;font-size:12px}footer .footerBrand{color:white;font-family:Georgia,serif;font-size:22px}footer p{margin:10px 0}footer div{display:flex;flex-direction:column;gap:8px}footer small{grid-column:1/4;color:#71817b}.eho{width:36px;grid-column:4;grid-row:2}
        @media(max-width:850px){.nav{height:72px}.brand img{width:58px}.navLinks{display:none}.buttonSmall{font-size:9px;padding:11px;min-width:0}.hero{height:auto;min-height:680px}.heroContent{margin:0 7vw}.hero h1{font-size:54px}.heroNote{display:none}.proofBar{overflow:auto;justify-content:flex-start}.proofBar span{min-width:max-content}.section{padding:80px 6vw}.story,.emergency,.portal,.faq{grid-template-columns:1fr}.storyVisual img,.serviceLayout>img,.portal>img,.faqImage img{height:430px}.stamp{right:15px}.sectionHeading{grid-template-columns:1fr;gap:25px}.serviceLayout{grid-template-columns:1fr}.serviceLayout>img{height:400px}.emergency>img{min-height:380px;height:380px}.emergencyContent{padding:70px 7vw}.teamGrid{grid-template-columns:1fr}.teamGrid img{height:450px;object-position:top}.portalCopy{order:2}.portal>img{order:1}.faqImage{order:2}.finalCta{height:560px}footer{grid-template-columns:1fr 1fr}footer small{grid-column:1/3}.eho{grid-column:2;grid-row:auto;justify-self:end}}@media(max-width:500px){.hero h1{font-size:47px}.heroCopy{font-size:16px}.button{min-width:215px}.section h2,.emergency h2{font-size:43px}.storyVisual img,.serviceLayout>img,.portal>img,.faqImage img{height:350px}.phone{align-items:flex-start;flex-direction:column;gap:8px}.teamGrid img{height:370px}.finalCta h2{font-size:45px}footer{grid-template-columns:1fr}footer small,.eho{grid-column:1}}
      `}</style>
    </main>
  );
}
