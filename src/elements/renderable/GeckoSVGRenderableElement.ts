import { GeckoSVGElement } from "../GeckoSVGElement";

export class GeckoSVGRenderableElement<T extends SVGElement> extends GeckoSVGElement<T>{
    fill(color: string) {
        this.$el.setAttribute('fill', color);
        return this;
    }

    fillOpacity(fillOpacity: number) {
        this.$el.setAttribute('fill-opacity', fillOpacity + '');
        return this;
    }

    stroke(color: string) {
        this.$el.setAttribute('stroke', color);
        return this;
    }

    strokeOpacity(strokeOpacity: number) {
        this.$el.setAttribute('stroke-opacity', strokeOpacity + '');
        return this;
    }

    strokeWidth(width: number) {
        this.$el.setAttribute('stroke-width', width + 'px');
        return this;
    }

    opacity(opacity: number) {
        this.$el.setAttribute('opacity', opacity + '');
        return this;
    }
}