import {connect} from "react-redux";
import Tickets from "../components/Tickets";

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(Tickets)