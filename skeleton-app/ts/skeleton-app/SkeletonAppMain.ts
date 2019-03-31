import {CoreView} from "./core/CoreView";
import {CoreController} from "./core/CoreController";
import {CoreService} from "./core/CoreService";

/******************************************************************
 * SkeletonAppMain
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class SkeletonAppMain {

    /******************************************************************
     * Properties
     *****************************************************************/

    private readonly _coreView: CoreView;
    private readonly _coreController: CoreController;
    private readonly _coreService: CoreService;

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor() {
        this._coreView = new CoreView();
        this._coreService = new CoreService();
        this._coreController = new CoreController(this._coreView, this._coreService);
    }

    /******************************************************************
     * Public Methodes
     *****************************************************************/

    get view(): HTMLElement {
        return this._coreView.view;
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
