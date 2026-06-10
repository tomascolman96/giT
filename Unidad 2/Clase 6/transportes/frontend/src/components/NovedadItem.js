const NovedadItem = (props) => {
    const { title, subtitle, body } = props;
    return (
        <div className="novedad">
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{body}</p>
            <hr />
        </div>
    );
}

export default NovedadItem;