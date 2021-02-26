import React from 'react';
import './index.css';

import LinkCard from './LinkCard';
export default function LinkList({ links, refreshLinks }) {
    return (
        <div>
            <h2 className="my-4 final">Process</h2>
            <hr className="hr"/>
            {links &&
                links
                    .filter((link) => !link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}
            <h2 className="my-4 final">Executed</h2>
            <hr className="hr"/>
            {links &&
                links
                    .filter((link) => link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}
        </div>
    );
}