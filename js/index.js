'use strict';

import CommentBox from './components/CommentBox.js';

ReactDOM.render(
    <CommentBox url='comments.json' />,
    document.getElementById('content')
);
