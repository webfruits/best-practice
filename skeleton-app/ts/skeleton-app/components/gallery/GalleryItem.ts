import {UIComponent} from "@webfruits/core";
import {AppConfig} from "../../config/AppConfig";
import {GalleryItemVO} from "./GalleryItemVO";

/******************************************************************
 * GalleryItem
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class GalleryItem extends UIComponent {

    /******************************************************************
     * Properties
     *****************************************************************/

    // no properties yet

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor(private itemVO: GalleryItemVO) {
        super(AppConfig.NAMESPACE + "-gallery-item");
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/

    // no public methodes yet

    /******************************************************************
     * Private Methodes
     *****************************************************************/

    // no private methodes yet

    /******************************************************************
     * Events
     *****************************************************************/

    // no events yet

}
