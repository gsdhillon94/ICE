export class Standings {
   
    constructor(
        public goals_against:number,
        public id:number,
        public rank:number,
        public behinds_against:number,
        public pts:number,
        public behinds_for:number,
        public draws:number,
        public wins:number,
        public against:number,
        public losses:number,
        public name:String,
        public played:number,
        public goals_for:number,
        public percentage:number
        ) {}
}
