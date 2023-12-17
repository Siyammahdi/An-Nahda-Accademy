import PropTypes from "prop-types"

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/12 mx-auto my-8 text-center">
            <p className="text-secondary mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y py-4">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

export default SectionTitle;