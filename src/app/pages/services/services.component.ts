import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pv-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <div class="topline"><span>PROCUREVANTA</span><a routerLink="/">← Back home</a></div>
      <div class="eyebrow">PROCUREMENT SERVICES</div>
      <h1>A focused procurement<br><em>scope for business.</em></h1>
      <p class="intro">ProcureVanta currently focuses exclusively on procurement, sourcing and vendor coordination. Other facilities divisions can be added later without changing the core brand.</p>

      <div class="service-list">
        @for (group of groups; track group.no) {
          <article>
            <div class="number">{{group.no}}</div>
            <div class="service-body">
              <div class="service-heading"><h2>{{group.title}}</h2><span>↗</span></div>
              <p>{{group.description}}</p>
              <div class="chips">
                @for (item of group.items; track item) { <span>{{item}}</span> }
              </div>
            </div>
          </article>
        }
      </div>

      <div class="bottom-cta">
        <div><div class="eyebrow light">HAVE A REQUIREMENT?</div><h2>Let's source it.</h2></div>
        <a routerLink="/contact" class="button">Request a quotation <span>↗</span></a>
      </div>
    </section>
  `,
  styles: [`
    .page{max-width:1180px;margin:auto;padding:72px 8vw}.topline{display:flex;justify-content:space-between;font-size:9px;letter-spacing:.12em;font-weight:800;color:#798078}.topline a{color:#667068;text-decoration:none;letter-spacing:0;font-weight:600}.eyebrow{font-size:10px;letter-spacing:.18em;font-weight:800;color:#69736b;margin:62px 0 18px}h1{font:800 clamp(50px,7vw,84px)/.95 Manrope,Arial,sans-serif;letter-spacing:-.065em;margin:0}h1 em{font-style:normal;color:#718f50}.intro{max-width:630px;color:#717871;font-size:14px;line-height:1.75;margin:28px 0 75px}.service-list{border-top:1px solid #deded8}.service-list article{display:grid;grid-template-columns:90px 1fr;gap:35px;padding:42px 0;border-bottom:1px solid #deded8}.number{font-size:10px;color:#90a078;font-weight:800;letter-spacing:.15em}.service-heading{display:flex;justify-content:space-between;gap:20px}.service-heading h2{font:700 28px Manrope,Arial,sans-serif;letter-spacing:-.04em;margin:0}.service-heading span{color:#91a082}.service-body>p{max-width:650px;color:#747b75;font-size:12px;line-height:1.7}.chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:17px}.chips span{padding:8px 10px;border-radius:999px;background:#f0f1ec;font-size:9px;color:#505850}.bottom-cta{margin-top:70px;padding:45px;border-radius:25px;background:#162b25;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:30px}.bottom-cta .eyebrow{margin:0 0 12px;color:#a8b5ab}.bottom-cta h2{font:800 40px Manrope,Arial,sans-serif;letter-spacing:-.05em;margin:0}.button{display:inline-flex;align-items:center;gap:10px;border-radius:999px;background:#dcebc3;color:#162b25;text-decoration:none;padding:14px 18px;font-size:11px;font-weight:800;white-space:nowrap}.button span{color:#718f50}@media(max-width:650px){.page{padding:50px 24px}.service-list article{grid-template-columns:42px 1fr;gap:12px}.service-heading h2{font-size:21px}.bottom-cta{padding:30px;display:block}.bottom-cta .button{margin-top:25px}}
  `]
})
export class ServicesComponent {
  groups = [
    {no:'01',title:'IT & Electronics Procurement',description:'Sourcing of business IT equipment and related accessories based on client specifications.',items:['Laptops','Desktops','Monitors','Printers','UPS','Networking equipment','Keyboards & mice','Cables & adapters']},
    {no:'02',title:'Office Furniture & Workplace Procurement',description:'Procurement for offices, meeting spaces, workstations and employee facilities.',items:['Workstations','Office chairs','Executive chairs','Desks','Conference tables','Reception furniture','Storage cabinets','Lockers']},
    {no:'03',title:'Office Supplies & Stationery',description:'Recurring and project-based office consumables for day-to-day business operations.',items:['Paper','Pens & markers','Files & folders','Notebooks','Printer consumables','Labels','Desk accessories','General stationery']},
    {no:'04',title:'Electrical & Engineering Materials',description:'Sourcing of common workplace electrical, plumbing and engineering materials.',items:['LED lights','Switches & sockets','Cables','Electrical accessories','Pipes & fittings','Valves','Tools','Fasteners']},
    {no:'05',title:'Housekeeping & Cleaning Procurement',description:'Products and equipment required for workplace cleaning and hygiene.',items:['Cleaning chemicals','Mops & brooms','Vacuum cleaners','Scrubbers','Garbage bags','Tissues','Washroom consumables','Dispensers']},
    {no:'06',title:'Pantry & Cafeteria Procurement',description:'Workplace pantry and cafeteria supplies sourced for recurring business requirements.',items:['Tea & coffee','Sugar','Disposable cups','Plates & cutlery','Water supplies','Kitchen consumables','Pantry equipment','Food-service supplies']},
    {no:'07',title:'Safety & Fire-Safety Supplies',description:'Workplace safety products sourced against client requirements and applicable standards.',items:['PPE','Safety shoes','Gloves','Helmets','First-aid kits','Safety signage','Emergency lights','Fire-safety products']},
    {no:'08',title:'Corporate Gifting & Employee Kits',description:'Sourcing and coordination for employee onboarding, events and corporate gifting.',items:['Welcome kits','Laptop bags','Bottles','Diaries','Branded merchandise','Festival gifts','Event merchandise','Employee kits']},
    {no:'09',title:'Strategic Sourcing & RFQ Management',description:'Procurement support where supplier discovery, quotation comparison and negotiation are the main requirement.',items:['Supplier discovery','RFQs','Quotation comparison','Specification matching','Commercial negotiation','Alternate sourcing','Supplier evaluation','Order coordination']},
    {no:'10',title:'Managed Procurement Services',description:'Recurring procurement management for businesses that want one partner across multiple categories and suppliers.',items:['Purchase coordination','Vendor onboarding','Vendor management','Order tracking','Delivery coordination','Consumable replenishment','Spend reporting','Procurement MIS']}
  ];
}
