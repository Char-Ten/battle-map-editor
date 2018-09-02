import IndexStore from "./Index/index.js";
import MapCtrl from "./MapCtrl/index.js";
class Root{
	constructor() {
		this.index = new IndexStore(this, this);
		this.mapCtrl = new MapCtrl(this, this);
	}
}
export default {
    root: new Root()
};
