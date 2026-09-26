export interface PharmacyProduct {
  id: number
  name: string
  category: string
  description: string
  shortDescription: string
  price: number
  requiresPrescription: boolean
  inStock: boolean
}

const pharmacyProducts: Array<PharmacyProduct> = [
  {
    id: 1,
    name: 'Daily Multivitamin (60ct)',
    category: 'Vitamins & Supplements',
    description:
      'A complete daily multivitamin with essential vitamins and minerals to support general wellness. 60 tablets per bottle, one tablet daily with food.',
    shortDescription: 'Complete daily multivitamin, 60 tablets.',
    price: 12.5,
    requiresPrescription: false,
    inStock: true,
  },
  {
    id: 2,
    name: 'Amoxicillin 500mg (Rx)',
    category: 'Prescription',
    description:
      'A commonly prescribed antibiotic used to treat a variety of bacterial infections. Requires a valid prescription and pharmacist verification before dispensing.',
    shortDescription: 'Prescription antibiotic — pharmacist verification required.',
    price: 8.0,
    requiresPrescription: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'Digital Blood Pressure Monitor',
    category: 'Medical Devices',
    description:
      'An easy-to-use upper-arm digital blood pressure monitor with a large display, irregular heartbeat detection, and memory for two users.',
    shortDescription: 'Upper-arm digital blood pressure monitor.',
    price: 34.99,
    requiresPrescription: false,
    inStock: true,
  },
  {
    id: 4,
    name: 'Infant Fever Relief Drops',
    category: 'Baby & Child Care',
    description:
      'Gentle fever and pain relief drops formulated for infants, with a dosing syringe included. Consult a pharmacist for dosing by age and weight.',
    shortDescription: 'Fever relief drops for infants, with dosing syringe.',
    price: 6.75,
    requiresPrescription: false,
    inStock: false,
  },
  {
    id: 5,
    name: 'Advanced Skin Repair Cream',
    category: 'Skin Care',
    description:
      'A dermatologist-recommended repair cream for dry and sensitive skin, fragrance-free and suitable for daily use.',
    shortDescription: 'Dermatologist-recommended repair cream, fragrance-free.',
    price: 18.25,
    requiresPrescription: false,
    inStock: true,
  },
  {
    id: 6,
    name: 'Metformin 500mg (Rx)',
    category: 'Prescription',
    description:
      'A standard oral medication for managing type 2 diabetes. Requires a valid prescription and is available for automatic monthly refills.',
    shortDescription: 'Prescription diabetes medication — refill eligible.',
    price: 5.4,
    requiresPrescription: true,
    inStock: true,
  },
]

export default pharmacyProducts
