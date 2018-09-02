import * as React from "react";
import * as maptalks from "maptalks";
import { observer, inject } from "mobx-react";
import "maptalks/dist/maptalks.css";
import "./style.less";

@inject("root")
@observer
export default class MapView extends React.Component {
    constructor(props) {
        super(props);
		this.store = this.props.root.mapCtrl;
		
    }
    componentDidMount() {
        this.map = new maptalks.Map(this.mapContainer, {
            center: [116.407173156738, 39.9046897888184],
            zoom: 14,
            baseLayer: new maptalks.TileLayer("base", {
                urlTemplate:
                    "https://mt0.google.cn/vt/lyrs=r&x={x}&y={y}&z={z}",
                subdomains: ["a", "b", "c"],
                attribution:
                    '&copy; <a href="http://www.osm.org" target="_blank">OpenStreetMap</a> contributors'
            })
		});
		
		this.store.setMap(this.map);
    }

    render() {
        return (
            <section id="MapView" style={styles.root}>
                <div ref={e => (this.mapContainer = e)} className="container" />
            </section>
        );
    }
}

const styles = {
    root: {
        width: window.innerWidth,
        height: window.innerHeight
    }
};
