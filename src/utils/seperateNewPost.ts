const seperateNewPost = (dataDate: string) => {
    const now = new Date();
    const compareDate = new Date(dataDate);
    let threeDateAgo = new Date();
    threeDateAgo.setDate(now.getDate() - 3);

    return threeDateAgo < compareDate;
}

export default seperateNewPost;