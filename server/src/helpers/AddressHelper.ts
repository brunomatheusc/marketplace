export default class AddressHelper {
	constructor(
		public cep: string, 
		public street: string, 
		public number: number, 
		public complement: string,
		public neighbour: string,
		public city: string,
		public uf: string
	) {}
}