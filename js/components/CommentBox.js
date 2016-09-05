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
            //this.loadComments();
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
    handleCommentSubmit(comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }
}

export default CommentBox;
