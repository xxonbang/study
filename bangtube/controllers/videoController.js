import { videos } from "../db"
import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
    // const searchingBy = req.query.term; 과 아랫줄은 같은 내용, 아랫줄은 최신 ecma6 문법임
    const {query: { term: searchingBy }} = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}


export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and Save video
    res.redirect(routes.videoDetail(324393));
};


export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });