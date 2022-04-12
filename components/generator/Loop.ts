import IAutoHotkey from "../../interfaces/IAutoHotkey";
/**
 * Create a N loop if -1 then infinite 
 * 
 */

class Loop implements IAutoHotkey {

    _children: IAutoHotkey[]

    // Loop implementation
    private _loops: number

    constructor(n: number) {
        this._loops = n;
        this._children = [] 
    }

    public get children(): IAutoHotkey[] {
        return this._children
    }

    public set child(child: IAutoHotkey) {
        this._children.push(child)
    }

    public get loops(): number {
        return this._loops
    }

    public set loops(n: number) {
        this._loops = n;
    }

    /**
     * return the code for this object
     */
    public get code(): string {
        return (this._loops == -1) ? "Loop {\n" : `Loop, ${this._loops} {\n`
    }
}

export default Loop