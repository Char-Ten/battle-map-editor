import IndexStore from "./Index";

export default {
	root:class{
		constructor(){
			this.index=new IndexStore(this,this);
		}
	}
}