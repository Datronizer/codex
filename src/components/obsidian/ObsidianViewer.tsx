import { Marked } from "marked"
import React from "react"

type P = {}
type S = {
    note: string
}
export class ObsidianViewer extends React.Component<P, S>
{
    public constructor(props: P) {
        super(props)
        this.state = { note: require("./python-prog12583/Concepts/Python.md").parse() }
    }

    public render() {
        const marked = new Marked();
        return (
            <section>
                <article dangerouslySetInnerHTML={{ __html: this.state.note }}></article>
                <div>{this.state.note}</div>
            </section >
        )
    }

}