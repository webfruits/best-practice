import {CoreView} from "./CoreView";
import {CoreService} from "./CoreService";
import {GalleryItemVO} from "../components/gallery/GalleryItemVO";

/******************************************************************
 * CoreController
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class CoreController {

    /******************************************************************
     * Properties
     *****************************************************************/

    // no properties yet

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor(private _coreView: CoreView, private _coreService: CoreService) {
        this.initListeners();
        this.start();
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/

    // no public methodes yet

    /******************************************************************
     * Private Methodes
     *****************************************************************/

    private start() {
        this._coreService.requestGalleryData();
    }

    private initListeners() {
        this._coreView.navigation.onNavigationSignal.add((galleryItemID: number) => this.onNavigationClicked(galleryItemID));
        this._coreService.onGalleryDataAvailableSignal.addOnce((data: GalleryItemVO[]) => this.onGalleryDataLoaded(data));
    }

    private showGalleryItem(galleryItemID: number) {
        this._coreView.gallery.showItem(galleryItemID);
    }

    /******************************************************************
     * Events
     *****************************************************************/

    private onNavigationClicked(galleryItemID: number) {
        this.showGalleryItem(galleryItemID);
    }

    private onGalleryDataLoaded(galleryData: GalleryItemVO[]) {
        this._coreView.gallery.setItemVOList(galleryData);
    }
}
