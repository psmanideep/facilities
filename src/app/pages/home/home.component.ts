import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceCard { no: string; title: string; description: string; items: string[]; }

@Component({
  selector: 'pv-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services: ServiceCard[] = [
    { no: '01', title: 'IT & Electronics', description: 'Business technology sourcing with specification matching, quotation comparison and delivery coordination.', items: ['Laptops', 'Monitors', 'Printers', 'UPS'] },
    { no: '02', title: 'Office & Furniture', description: 'Procurement for new offices, expansions, replacements and everyday workplace requirements.', items: ['Workstations', 'Chairs', 'Desks', 'Storage'] },
    { no: '03', title: 'Electrical & Engineering', description: 'Sourcing of common workplace electrical, plumbing and engineering materials.', items: ['Lighting', 'Cables', 'Pipes', 'Tools'] },
    { no: '04', title: 'Housekeeping & Pantry', description: 'Recurring workplace consumables with supplier coordination and replenishment support.', items: ['Cleaning', 'Washroom', 'Pantry', 'Equipment'] },
    { no: '05', title: 'Safety & Fire', description: 'Workplace safety products sourced against client specifications and applicable requirements.', items: ['PPE', 'First Aid', 'Signage', 'Emergency'] },
    { no: '06', title: 'Corporate Gifting', description: 'Employee and client gifting procurement for onboarding, festivals, events and campaigns.', items: ['Welcome Kits', 'Bags', 'Bottles', 'Merchandise'] },
    { no: '07', title: 'Strategic Sourcing', description: 'Supplier discovery, RFQ management and commercial evaluation for specific requirements.', items: ['Supplier Search', 'RFQs', 'Comparison', 'Negotiation'] },
    { no: '08', title: 'Managed Procurement', description: 'Recurring procurement coordination for businesses that want one partner across categories.', items: ['POs', 'Vendors', 'Delivery', 'MIS'] }
  ];

  steps = [
    { no: '01', title: 'Requirement', description: 'Understand the specification, quantity, budget and timeline.' },
    { no: '02', title: 'Source', description: 'Identify suitable suppliers and request competitive quotations.' },
    { no: '03', title: 'Compare', description: 'Normalize specifications and compare commercial options.' },
    { no: '04', title: 'Procure', description: 'Coordinate approval, purchase and supplier execution.' },
    { no: '05', title: 'Deliver', description: 'Track delivery and close the procurement cycle.' }
  ];
}
