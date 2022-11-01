var spec =
{
    swagger: "2.0",   
    info: {
        description:
            "API docs music player",
        version: "1.0", 
        title: "API DOCS"
    },
    host: window.location.host,  
    basePath: "/api",     
    tags: [ 
        {
            name: "auth",                                
            description: "Đăng kí, đăng nhập, xác thực tài khoản",  
        }
    ],
    schemes: [window.location.protocol.replace(":", "")], 
    paths: {
        "/signup": {   
            post: {       
                tags: ["auth"],
                summary: "Tạo tài khoản",
                operationId: "CreateUser",
                consumes: ["application/json"],    
                produces: ["application/json"],     
                parameters: [              
                    {
                        "in": "body",      
                        "name": "Thông tin tài khoản",  
                        "required": "true",   
                        "schema": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                }
                            }
                        },
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                }
            }
        },
        "/signin": {
            post: {
                tags: ["auth"],
                summary: "Đăng nhập tài khoản",
                operationId: "Login",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "body",      
                        "name": "Thông tin tài khoản",  
                        "required": "true",   
                        "schema": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                }
                            }
                        },
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
        },
        "/auth": {
            post: {
                tags: ["auth"],
                summary: "Xác thực token",
                operationId: "Authenication",
                produces: ["application/json"],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
        },
        "/logout": {
            post: {
                tags: ["auth"],
                summary: "Đăng xuất",
                operationId: "LogOut",
                produces: ["application/json"],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
        },
        "/song": {
            post: {
                tags: ["song"],
                summary: "Upload nhạc",
                operationId: "CreateSong",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "formData",
                        name: "file",
                        type: "file",
                        description: "The music file to upload.",
                        required: true
                    },
                    {
                        in: "formData",
                        name: "title",
                        type: "string",
                        required: true
                    },
                    {
                        in: "formData",
                        name: "thumbnail",
                        type: "file",
                    },
                    {
                        in: "formData",
                        name: "genreID",
                        type: "int",
                        required: true
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
            get: {
                tags: ["song"],
                summary: "Lấy list bài nhạc",
                operationId: "GetListSongs",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "query",
                        name: "page",
                        type: "interger"
                    },
                    {
                        in: "query",
                        name: "search",
                        type: "string"
                    },
                    {
                        in: "query",
                        name: "orderBy",
                        type: "string"
                    },
                    {
                        in: "query",
                        name: "limit",
                        type: "interger"
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
        },
        "/song/{songID}": {
            get: {
                tags: ["song"],
                summary: "Lấy bài nhạc theo id",
                operationId: "GetSongByID",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        schema: {
                            type: "interger"
                        }  
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
            delete: {
                tags: ["song"],
                summary: "Xoá bài nhạc",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        schema: {
                            type: "interger"
                        }  
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
            put: {
                tags: ["song"],
                summary: "Update bài nhạc",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        schema: {
                            type: "interger"
                        }  
                    },
                    {
                        in: "formData",
                        name: "file",
                        type: "file",
                        description: "The music file to upload."
                    },
                    {
                        in: "formData",
                        name: "title",
                        type: "string"
                    },
                    {
                        in: "formData",
                        name: "thumbnail",
                        type: "file"
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/song/like/{songID}": {
            post: {
                tags: ["song"],
                summary: "Like bài nhạc",
                operationId: "GetSongByID",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        schema: {
                            type: "interger"
                        }  
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
        },
        "/song/{songID}/comment": {
            get: {
                tags: ["comment"],
                summary: "Lấy comments bài nhạc",
                operationId: "GetCommentBySongID",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        schema: {
                            type: "interger"
                        }  
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
            post: {
                tags: ["comment"],
                summary: "Comment bài nhạc",
                operationId: "CreateComment",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        schema: {
                            type: "interger"
                        }  
                    },
                    {
                        in: "body",
                        name: "content",
                        required: true,   
                        "schema": {
                            "type": "object",
                            "properties": {
                                "content": {
                                    "type": "string"
                                }
                            }
                        }, 
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/song/comment/{commentID}": {
            put: {
                tags: ["comment"],
                summary: "Cập nhật comment",
                operationId: "UpdateComment",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "commentID",
                        schema: {
                            type: "interger"
                        }  
                    },
                    {
                        in: "body",
                        name: "content",
                        required: true,   
                        "schema": {
                            "type": "object",
                            "properties": {
                                "content": {
                                    "type": "string"
                                }
                            }
                        }, 
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            },
            delete: {
                tags: ["comment"],
                summary: "Xoá comment",
                operationId: "DeleteCommentBySongID",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "commentID",
                        schema: {
                            type: "interger"
                        }  
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/song/play/{songID}": {
            post: {
                tags: ["song"],
                summary: "Tăng số lượt nghe bài hát",
                operationId: "IncrementPlayCount",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "songID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/": {
            get: {
                tags: ["user"],
                summary: "Lấy danh sách user",
                operationId: "GetUserList",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "query",
                        name: "page",
                        type: "interger"
                    },
                    {
                        in: "query",
                        name: "search",
                        type: "string"
                    },
                    {
                        in: "query",
                        name: "limit",
                        type: "interger"
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/uploadAvatar": {
            post: {
                tags: ["user"],
                summary: "Đăng ảnh đại diện",
                operationId: "CreateAvatar",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "formData",
                        name: "avatar",
                        type: "file",
                        description: "Image file to upload.",
                        required: true
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/{userID}": {
            get: {
                tags: ["user"],
                summary: "Lấy thông tin user",
                operationId: "GetUserByID",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "userID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/favorite": {
            get: {
                tags: ["user"],
                summary: "Lấy bài hát yêu thích của user",
                operationId: "GetFavoriteSongs",
                produces: ["application/json"],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/{userID}/songs": {
            get: {
                tags: ["user"],
                summary: "Lấy các bài nhạc user đã đăng tải",
                operationId: "GetSongOfUser",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "userID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/follow/{followingID}": {
            post: {
                tags: ["user"],
                summary: "Follow user khác",
                operationId: "Follow",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "followingID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/unfollow/{followingID}": {
            post: {
                tags: ["user"],
                summary: "Unfollow user khác",
                operationId: "Unfollow",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "followingID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/follower/{userID}": {
            get: {
                tags: ["user"],
                summary: "Lấy danh sách người theo dõi",
                operationId: "GetFollowers",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "userID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/user/following/{userID}": {
            get: {
                tags: ["user"],
                summary: "Lấy danh sách người đang theo dõi",
                operationId: "GetFollowings",
                produces: ["application/json"],
                parameters: [
                    {
                        in: "path",
                        name: "userID",
                        type: "int",
                    }
                ],
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        },
        "/genre": {
            get: {
                tags: ["genre"],
                summary: "Lấy list genre",
                operationId: "GetGenres",
                responses: {
                    200: {                                    
                        description: "OK",   
                    },
                }
            }
        }
    }
};