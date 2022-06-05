export interface FriendshipStatus {
    following: boolean;
    incoming_request: boolean;
    is_bestie: boolean;
    is_feed_favorite: boolean;
    is_private: boolean;
    is_restricted: boolean;
    outgoing_request: boolean;
}

export interface GrowthFrictionInfo {
    has_active_interventions: boolean;
    interventions: any;
}

export interface InstagramUser {
    account_badges: any[];
    follow_friction_type: 0;
    friendship_status: FriendshipStatus;
    full_name: string;
    growth_friction_info: GrowthFrictionInfo;
    has_anonymous_profile_picture: boolean;
    has_highlight_reels: boolean;
    has_opt_eligible_shop: boolean;
    is_private: boolean;
    is_verified: boolean;
    latest_reel_media: number;
    live_broadcast_id: null;
    pk: string;
    profile_pic_id: string;
    profile_pic_url: string;
    search_social_context: string;
    should_show_category: boolean;
    social_context: string;
    transparency_product_enabled: boolean;
    unseen_count: number;
    username: string;
}


const userExample = {
    "userData": {
        "pk": "7646963564",
        "username": "ivonaaat",
        "full_name": "🌸Ivona🌸",
        "is_private": false,
        "profile_pic_url": "https://instagram.fbeg1-1.fna.fbcdn.net/v/t51.2885-19/280663338_134842455792311_8661806727531284814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbeg1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=2-Y-DqeWsxwAX8JucMM&tn=p4R7GG8g-z9gxLo2&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-Gljmnj9OiG4EMuLsc9hM-T_AqA_LchVvBXq1ATfOTFg&oe=62A3DC1B&_nc_sid=5cbaad",
        "profile_pic_id": "2837230440554850302_7646963564",
        "is_verified": false,
        "follow_friction_type": 0,
        "growth_friction_info": {
            "has_active_interventions": false,
            "interventions": {}
        },
        "account_badges": [],
        "has_anonymous_profile_picture": false,
        "has_highlight_reels": false,
        "has_opt_eligible_shop": false,
        "transparency_product_enabled": false,
        "social_context": "Followed by jelena_stela + 6 more",
        "search_social_context": "Followed by jelena_stela + 6 more",
        "friendship_status": {
            "following": true,
            "is_private": false,
            "incoming_request": false,
            "outgoing_request": false,
            "is_bestie": false,
            "is_restricted": false,
            "is_feed_favorite": true
        },
        "latest_reel_media": 0,
        "live_broadcast_id": null,
        "should_show_category": false
    }
}

