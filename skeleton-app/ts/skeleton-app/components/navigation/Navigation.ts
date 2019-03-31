import {UIComponent} from "@webfruits/core";
import {AppConfig} from "../../config/AppConfig";
import {Signal} from "@webfruits/core/dist/signal/Signal";

/******************************************************************
 * Navigation
 *
 * @author matthias.schulz@jash.de
 *****************************************************************/

export class Navigation extends UIComponent {

    /******************************************************************
     * Properties
     *****************************************************************/

    public onNavigationSignal = new Signal<number>();

    /******************************************************************
     * Constructor
     *****************************************************************/

    constructor() {
        super(AppConfig.NAMESPACE + "-navigation");
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

    // no events methodes yet

}
