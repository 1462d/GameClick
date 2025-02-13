import React from 'react';
import Badges from './Badges';
import Bio from './Bio';
import RecentPosts from './RecentPosts';
import FriendsList from './FriendsList';
import './Profile.css'; // Import CSS for styling

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <div className="profile-header">
                <img className="banner" src={user.banner} alt="Banner" />
                <div className="profile-info">
                    <img className="profile-picture" src={user.profilePicture} alt={`${user.username}'s profile`} />
                    <h1>{user.username}</h1>
                    <p className={`status ${user.isOnline ? 'online' : 'offline'}`}>
                        {user.isOnline ? "Online" : "Offline"}
                    </p>
                    <div className="user-stats">
                        <span>{user.friends.length} Friends</span>
                        <span>{user.followers.length} Followers</span>
                        <span>{user.following.length} Following</span>
                        <span>{user.recentPosts.length} Posts</span>
                    </div>
                    <div className="action-buttons">
                        <button className="btn">Message</button>
                        <button className="btn">Add Friend</button>
                        <button className="btn">Follow</button>
                    </div>
                </div>
            </div>
            <Bio bio={user.bio} />
            <Badges badges={user.badges} />
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <p>Recently Played: {user.recentGame}</p>
                <p>Achievements: {user.achievements.join(', ')}</p>
            </div>
            <div className="recent-posts">
                <h2>Recent Posts</h2>
                <RecentPosts posts={user.recentPosts} />
            </div>
            <div className="friends">
                <h2>Friends</h2>
                <FriendsList friends={user.friends} />
            </div>
        </div>
    );
};

export default Profile;