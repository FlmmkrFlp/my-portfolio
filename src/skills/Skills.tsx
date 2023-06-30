import React from "react";
import styles from "./Skills.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import ReactLogo from "../common/assets/image/React.png"
import JsLogo from "../common/assets/image/JavaScript.png"
import CssLogo from "../common/assets/image/CSS.png"
import HtmlLogo from "../common/assets/image/HTML.png"
import TsLogo from "../common/assets/image/TypeScript.png"
import ReduxLogo from "../common/assets/image/Redux.png"
import { BlockConstructor } from "../common/blockConstructor/BlockConstructor"
import { TitleConstructor } from "../common/titleConstructor/TitleConstructor";

type PropsType = {

}


export const Skills: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Skills}>
             <TitleConstructor Title={"Skills"}  />
            <div className={`${stylesContainer.Container} ${styles.container}`} >
                <BlockConstructor
                    img={ReactLogo}
                    alt={"ReactLogo"}
                    name={"React"}
                    description={"React is a JavaScript-based UI development library.  Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."}
                />
                <BlockConstructor
                    img={JsLogo}
                    alt={"JsLogo"}
                    name={"JavaScript"}
                    description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."}
                />
                <BlockConstructor
                    img={HtmlLogo}
                    alt={"HtmlLogo"}
                    name={"HTML"}
                    description={"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."}
                />
                <BlockConstructor
                    img={ReduxLogo}
                    alt={"ReactLogo"}
                    name={"Redux"}
                    description={"Redux is a pattern and library for managing and updating application state, using events called `actions`. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion."}
                />
                <BlockConstructor
                    img={TsLogo}
                    alt={"TsLogo"}
                    name={"TypeScript"}
                    description={"TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript."}
                />
                <BlockConstructor
                    img={CssLogo}
                    alt={"CssLogo"}
                    name={"CSS"}
                    description={"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."}
                />
            </div>
        </div>
    )
}