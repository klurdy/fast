import { html, slotted } from "@microsoft/fast-element";
import { Toolbar } from "./toolbar";

/**
 * The template for the {@link @microsoft/fast-foundation#Toolbar} component.
 * @public
 */
export const ToolbarTemplate = html<Toolbar>`
    <template role="toolbar">
        <slot ${slotted("items")}></slot>
    </template>
`;
