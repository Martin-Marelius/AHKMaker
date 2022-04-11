import IAutoHotkey from "../../interfaces/IAutoHotkey";
/**
 * Create a N loop if -1 then infinite 
 * 
 */

class Loop implements IAutoHotkey{

    private _loops: number
    private _child: IAutoHotkey
    private _childCode: string

    constructor(n: number, child: IAutoHotkey) {
        this._loops = n;
        this._child = child
        this._childCode = (child != null) ? child.code : ''
    }

    public get loops(): number {
        return this._loops
    }

    public set loops(n: number) {
        this._loops = n;
    }

    public get code() : string {

        // return infinite loop
        if (this._loops == -1 ) {
            return (`Loop { \n` + `\t${this._childCode}` + `\n}`)
        }

        // return n loop
        else {
            return (`Loop, ${this._loops} { \n` + `\t${this._childCode}` + `\n}`)
        }

        

    }
}

export default Loop