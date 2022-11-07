import { readLS, writeLS } from "./ls.js";

export default class CommentModel {
  constructor(type) {
    // this.listElement = listElement
    this.type = type;
    this.comments = readLS(this.type) || [];
  }

  addComment(name, content) {
    const newComment = {
      name,
      date: new Date().toLocaleString("en-US"),
      content,
    };
    this.comments.push(newComment);
    writeLS(this.type, this.comments);
  }

  getCommentList(filter = null) {
    let filtered = this.comments;
    if (filter) {
      filtered = this.comments.filter((comment) => comment.name === filter);
    }
    return filtered;
  }

  renderCommentList(element, filter = null) {
    element.innerHTML = "";
    const commentList = this.getCommentList(filter);

    commentList.forEach((comment) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${filter ? "" : `<span>${comment.name}</span>`}
        <span>${comment.date}</span>
        <span>${comment.content}</span>
        `;
        element.appendChild(li);
      });
  }

  buildCommentListHtml(hike) {
    const commentSection = document.createElement("ul");
    this.renderCommentList(commentSection, hike.name);
    return commentSection;
  }

  buildCommentForm(hike, commentSection, outputEl) {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "Add Comment";
    form.appendChild(input);
    form.appendChild(button);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const comment = input.value.trim();
        input.value = "";
        if (comment) {
            this.addComment(hike.name, comment);
            this.renderCommentList(commentSection, hike.name);
            this.renderCommentList(outputEl);
        }
    });

    return form;
  }
}
