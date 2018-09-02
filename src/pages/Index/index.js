import * as React from "react";
import MapView from "src/components/MapView";
import { observer, inject } from "mobx-react";
import "./styles/index.less";
@inject("root")
@observer
export default class Main extends React.Component {
    constructor(props) {
		super(props);
		console.log(this.props.root)
        this.store = this.props.root.index;
    }
    onsearch = () => {
		this.store.rootStore.mapCtrl.search(this.store.searchValue)
	};
    render() {
        return (
            <React.Fragment>
				<div className="search-box">
                    <input
                        type="search"
                        value={this.store.searchValue}
                        onChange={e =>
                            this.store.updateSearchValue(e.target.value)
                        }
                    />
                    <a onClick={this.onsearch}>搜索</a>
                </div>
                <MapView />
            </React.Fragment>
        );
    }
}
