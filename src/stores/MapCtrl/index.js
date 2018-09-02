import { observable, action } from "mobx";
import * as maptalks from "maptalks";
import Store from "src/stores/Store";
import xhr from "src/common/scripts/xhr.js";

export default class IndexStore extends Store {
	/**@type {maptalks.Map} */
	map=null;

	@action setMap(map=null){
		this.map=map;
	}

    @action
    async search(text) {
		if(!this.map){
			return
		}
		const res = await xhr({
            url: `http://dev.virtualearth.net/REST/v1/Locations?query=${window.encodeURIComponent(
                text
            )}&key=AnkCK76tl9apX52SmgFPYttVk7D-U1MPIYrqIamHFDLOQdOdxTvjosdCcg0MHJUJ`
		});
		
		if(!res.resourceSets||!res.resourceSets[0]){
			return
		}
		if(!res.resourceSets[0].resources||!res.resourceSets[0].resources[0]){
			return
		}
		const resources=res.resourceSets[0].resources[0];
		let [lat,lng]=resources.point.coordinates;
		this.map.setCenter(new maptalks.Coordinate([lng,lat]))
	}
	
}
