import { observable, action } from "mobx";
import Store from "src/stores/Store";
export default class IndexStore extends Store {
    // constructor(...props) {
    //     super(...props);
	// }
	@observable searchValue="";

	@action updateSearchValue(text=""){
		this.searchValue=text
	}
}
