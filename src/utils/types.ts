export type News = {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string; 
    updated_at: string;   
    featured: boolean;
    launches: string[]; 
    events: string[];  
};

export type NewsResponse = {
    count: number;
    next: string;
    previous: string;
    results: News[];
};

export type FiltersParams = {
	term?: string;
	page?: string;
};

export type NewsResponseWithParams = { response: NewsResponse; params: FiltersParams };

export type Blogs = {
	id: number;
	title: string;
	url: string;
	image_url: string;
	news_site: string;
	summary: string;
	published_at: string; 
	updated_at: string;   
	featured: boolean;
	launches: {
		launch_id: string;
		provider: string;
	}[];
	events: {
		event_id: number;
		provider: string;
	}[];
}

export type BlogResponse = {
    count: number;
    next: string;
    previous: string;
    results: Blogs[];
};

export type BlogsResponseWithParams = { response: BlogResponse; params: FiltersParams };

