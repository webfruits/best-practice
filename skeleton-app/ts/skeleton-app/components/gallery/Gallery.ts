import {AppConfig} from "../../config/AppConfig";
import {GalleryItemVO} from "./GalleryItemVO";
import {GalleryItem} from "./GalleryItem";
import {UIComponent} from "@webfruits/core";

/******************************************************************
 * Gallery
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class Gallery extends UIComponent {

    /******************************************************************
     * Properties
     *****************************************************************/

    // no properties yet

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor() {
        super(AppConfig.NAMESPACE + "-gallery");
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/

    public setItemVOList(galleryData: GalleryItemVO[]) {
        galleryData.forEach((itemVO: GalleryItemVO) => {
            this.addChild(new GalleryItem(itemVO));
        })
    }

    public showItem(galleryItemID: number) {
    }

    /******************************************************************
     * Private Methodes
     *****************************************************************/

    // no private methodes yet

    /******************************************************************
     * Events
     *****************************************************************/

    // no events yet



}
