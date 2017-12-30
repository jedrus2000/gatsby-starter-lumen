import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
} from 'react-share';

import './style.scss';
import config from '../../../gatsby-config';


const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
} = ShareButtons;

const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const MailruIcon = generateShareIcon('mailru');
const EmailIcon = generateShareIcon('email');
const LivejournalIcon = generateShareIcon('livejournal');


class ShareOnSocialMediaBar extends Component {
    render() {
        const { postNode } = this.props;
        const post = postNode.frontmatter;
        const url = config.siteMetadata.url + postNode.fields.slug;
        return (
            <div className="social-shares">
                <table>
                    <tbody>
                    <tr>
                        <td>Udostępnij :</td>
                        <td className="facebook-share">
                            <FacebookShareButton
                                url={url}
                                quote={post.title}
                                >
                                <FacebookIcon
                                    size={32}
                                    round />
                            </FacebookShareButton>

                        </td>
                        <td className="twitter-share">
                            <TwitterShareButton
                                url={url}
                                title={post.title}>
                                <TwitterIcon
                                    size={32}
                                    round />
                            </TwitterShareButton>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ShareOnSocialMediaBar.propTypes = {
    postNode: PropTypes.object.isRequired
};

export default ShareOnSocialMediaBar;

