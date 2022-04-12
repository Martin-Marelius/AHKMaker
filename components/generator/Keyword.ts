import IAutoHotkey from "../../interfaces/IAutoHotkey";
/**
 * Create a N loop if -1 then infinite
 *
 */

class Keyword implements IAutoHotkey {
	_children: IAutoHotkey[];

	// Keyword implementation
	private _keyword: string;
	private _button: string;

	constructor(char: string, button: string) {
		this._keyword = char.toLowerCase();
		this._button = button.toUpperCase();
		this._children = [];
	}

	public get children(): IAutoHotkey[] {
		return this._children;
	}

	public set child(child: IAutoHotkey) {
		this._children.push(child);
	}

	public get keyword(): string {
		return this._keyword;
	}

	public set keyword(n: string) {
		this._keyword = n;
	}

	/**
	 * return the code for this object
	 */
	public get code(): string {
		let base = this._keyword;
		let key = this._button;

		switch (key) {
			case "CTRL":
				return "^" + base + "::";
			case "SHIFT":
				return "+" + base + "::";
			case "ALT":
				return "!" + base + "::";
			case "WIN":
				return "#" + base + "::";
			default:
				return base;
		}
	}
}

export default Keyword;
