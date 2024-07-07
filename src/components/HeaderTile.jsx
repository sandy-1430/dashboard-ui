export default function HeaderTile(props) {
    const { title } = props
    return (
        <div className="header-titles-right d-flex just-btn align_center">
            <h4 className="title">{title}</h4>
            <p>
                <a className="primary">View All</a>
            </p>
        </div>
    )
}
