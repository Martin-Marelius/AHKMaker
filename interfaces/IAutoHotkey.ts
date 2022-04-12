

/**
 * interface for every AutoHotkey component 
 */
interface IAutoHotkey {
    
    _children: IAutoHotkey[]

    /**
     * returns the ahk code with every child encapsulated.
     */
    get code() : string 

    set child(children : IAutoHotkey)

    get children() : IAutoHotkey[]
}

export default IAutoHotkey