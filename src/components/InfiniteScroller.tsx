import React, { useEffect, useState } from 'react';

interface InfiniteScrollerProps {
    children : React.ReactNode;
}

const InfiniteScroller = (props: InfiniteScrollerProps) => {
    const {
        children
    } = props;

    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    // L'animation du scroll horizontal peut poser certains problèmes à des personnes
    // On désactive donc si nécessaire
    useEffect(() => {
        setIsAnimated(!window.matchMedia("(prefers-reduce-motion: reduce)").matches);
    }, []);
   
    // On cache les éléments dupliqués aux outils d'accessibilité
    const duplicateItems = React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
            'aria-hidden' : true
        });
    })

    return <div className="Scroller" data-animated={isAnimated}>
        <ul className="Scroller__inner">
            {children}
            {duplicateItems}
        </ul>
    </div>
}

export default InfiniteScroller;