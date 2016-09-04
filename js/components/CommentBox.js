import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.loadComments();
        setInterval(() => {
            this.loadComments();
        }, 2000);
    }
    loadComments() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response
                });
            });
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}

export default CommentBox;
