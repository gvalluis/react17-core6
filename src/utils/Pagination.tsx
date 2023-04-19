import { useEffect, useState } from "react";


export default function Pagination(props: PaginationProps) {
    const [linkModels, setLinkModels] = useState<LinkModel[]>([]);

    const selectPage = (link: LinkModel) => {
        if (link.page === props.currentPage)
            return;
        if (!link.enabled)
            return;
        props.onChange(link.page);
    }

    const getClass = (link: LinkModel) => {
        if (link.active) {
            return "active pointer"
        }
        if (!link.enabled)
            return "disabled"
        return "pointer"
    }

    useEffect(() => {
        const previousPageEnabled = props.currentPage !== 1;
        const previousPage = props.currentPage - 1;
        const links: LinkModel[] = [];

        links.push({
            text: 'Previous',
            enabled: previousPageEnabled,
            page: previousPage,
            active: false,
        });

        for (let index = 1; index <= props.totalAmoutOfPages; index++) {
            if (index >= props.currentPage - props.radio && index <= props.currentPage + props.radio) {
                links.push({
                    text: `${index}`,
                    enabled: true,
                    page: index,
                    active: props.currentPage === index,
                })
            }
        }
        const nextPageEnabled = props.currentPage !== props.totalAmoutOfPages && props.totalAmoutOfPages > 0;
        const nextPage = props.currentPage + 1;

        links.push({
            text: `Next`,
            enabled: nextPageEnabled,
            page: nextPage,
            active: false,
        })

        setLinkModels(links);
    }, [props.currentPage, props.totalAmoutOfPages, props.radio])




    return <nav>
        <ul className="pagination justify-content-center">
            {linkModels.map(link => <li key={link.text}
                onClick={() => selectPage(link)}
                className={`page-item cursor ${getClass(link)}`}>
                <span className="page-link">{link.text}</span>
            </li>)}
        </ul>
    </nav>
}

interface LinkModel {
    page: number;
    enabled: boolean;
    text: string;
    active: boolean;
}

interface PaginationProps {
    currentPage: number;
    totalAmoutOfPages: number;
    radio: number;
    onChange(page: number): void;
}

Pagination.defaultProps = {
    radio: 3,
}