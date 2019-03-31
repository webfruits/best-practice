import {Signal} from "@webfruits/core/dist/signal/Signal";
import {GalleryItemVO} from "../components/gallery/GalleryItemVO";

/******************************************************************
 * CoreService
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class CoreService {

    /******************************************************************
     * Properties
     *****************************************************************/

    public onGalleryDataAvailableSignal = new Signal<GalleryItemVO[]>();

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor() {
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/

    public requestGalleryData() {
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