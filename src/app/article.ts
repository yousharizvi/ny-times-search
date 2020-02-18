export interface Multimedia {
    rank: number;
    subtype: string;
    caption: string;
    credit: string;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: {
        xlarge: string,
        xlargewidth: number,
        xlargeheight: number
    };
    subType: string;
    crop_name: string;
}

export interface Headline {
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: string;
    seo: string;
    sub: string;
}

export interface Keyword {
    name: string;
    value: string;
    rank: number;
    major: string;
}

export interface Person {
    firstname: string;
    middlename: string;
    lastname: string;
    qualifier: string;
    title: string;
    role: string;
    organization: string;
    rank: number;
}

export interface Article {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    print_section: string;
    print_page: string;
    source: string;
    multimedia: Array<Multimedia>;
    headline: Headline;
    keywords: Array<Keyword>;
    pub_date: Date;
    document_type: string;
    news_desk: string;
    section_name: string;
    subsection_name: string;
    byline: {
        original: string,
        person: Array<Person>,
        organization: string
    };
    type_of_material: string;
    _id: string;
    word_count: string;
    uri: string;
}

export interface ArticleApiResponseMeta {
    hits: number;
    offset: number;
    time: number;
}

export interface ArticleApiResponseObject {
    docs: Article[];
    meta: ArticleApiResponseMeta;
}

export interface ArticleApiResponse {
    status: string;
    copyright: string;
    response: ArticleApiResponseObject;
}
