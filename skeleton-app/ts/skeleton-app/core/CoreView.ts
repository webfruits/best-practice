import {UIComponent} from "@webfruits/core";
import {AppConfig} from "../config/AppConfig";
import {Gallery} from "../components/gallery/Gallery";
import {Navigation} from "../components/navigation/Navigation";

/******************************************************************
 * CoreView
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class CoreView extends UIComponent {

    /******************************************************************
     * Properties
     *****************************************************************/

    private _gallery: Gallery;
    private _navigation: Navigation;

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor() {
        super(AppConfig.NAMESPACE + "-app");
        this.initNavigation();
        this.initGallery();
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/

    get navigation(): Navigation {
        return this._navigation;
    }

    get gallery(): Gallery {
        return this._gallery;
    }

    /******************************************************************
     * Private Methodes
     *****************************************************************/

    private initNavigation() {
        this._navigation = new Navigation();
        this.addChild(this._navigation);
    }

    private initGallery() {
        this._gallery = new Gallery();
        this.addChild(this._gallery);
    }

    /******************************************************************
     * Events
     *****************************************************************/

    // no events yet


}
