import type { Stadium } from '../types'

export const stadiums: Stadium[] = [
  // USA
  { id: 'metlife', name: 'MetLife Stadium', city: 'Nova York/Nova Jersey', country: 'USA', capacity: 82500 },
  { id: 'atandt', name: 'AT&T Stadium', city: 'Dallas', country: 'USA', capacity: 80000 },
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Angeles', country: 'USA', capacity: 70240 },
  { id: 'lincoln', name: 'Lincoln Financial Field', city: 'Filadélfia', country: 'USA', capacity: 69796 },
  { id: 'bofastad', name: 'Bank of America Stadium', city: 'Charlotte', country: 'USA', capacity: 74867 },
  { id: 'nrg', name: 'NRG Stadium', city: 'Houston', country: 'USA', capacity: 72220 },
  { id: 'levi', name: "Levi's Stadium", city: 'São Francisco/Bay Area', country: 'USA', capacity: 68500 },
  { id: 'arrowhead', name: 'Arrowhead Stadium', city: 'Kansas City', country: 'USA', capacity: 76416 },
  { id: 'seattle', name: 'Lumen Field', city: 'Seattle', country: 'USA', capacity: 68740 },
  { id: 'miami', name: 'Hard Rock Stadium', city: 'Miami', country: 'USA', capacity: 65326 },
  { id: 'boston', name: 'Gillette Stadium', city: 'Boston', country: 'USA', capacity: 65878 },
  // MEXICO
  { id: 'azteca', name: 'Estádio Azteca', city: 'Cidade do México', country: 'Mexico', capacity: 87523 },
  { id: 'guadalajara', name: 'Estádio Akron', city: 'Guadalajara', country: 'Mexico', capacity: 46232 },
  { id: 'monterrey', name: 'Estádio BBVA', city: 'Monterrey', country: 'Mexico', capacity: 53500 },
  // CANADA
  { id: 'bmo', name: 'BMO Field', city: 'Toronto', country: 'Canada', capacity: 45000 },
  { id: 'bc_place', name: 'BC Place', city: 'Vancouver', country: 'Canada', capacity: 54500 },
]

export function getStadiumById(id: string): Stadium | undefined {
  return stadiums.find(s => s.id === id)
}
