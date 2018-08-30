import { observable, action } from 'mobx';
import Store from "src/store/Store";
export default class IndexStore extends Store{
	constructor(...props){
		super(...props);
	}
}