import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

import Button from "../Controls/Button";
import FriendUsersList from "../InfoCardLists/FriendUsersList";
import StretchList from "../InfoCardLists/StretchList";
import Input from "../Controls/Input";
import RoomsList from "../InfoCardLists/RoomsList";
import { utilizeFocus } from "../../helpers/functions";
import strings from "../../localization/strings";
import LeftPanelSubHeader from "./LeftPanelSubHeader";
class FriendsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      open: this.props.friendsSearchFocus,
      rooms: props.initialRooms,
      refresh: 0,
      pendingDBCall: false
    };

    this.searchFieldRef = utilizeFocus();
  }

  syncSearch(search) {
    search = search.trim();

    if (this.props.userSearchStatus === "loading") {
      // Wait until the db has finished its current search
      this.setState({
        pendingDBCall: true
      });
    } else {
      this.searchUsers(search);
    }

    if (!this.state.open && search.length > 0) {
      // Force the rooms list to recalculate its height from 0
      this.setState({
        refresh: this.state.refresh + 1
      });
    }

    const filterRooms = this.props.initialRooms.filter(room => {
      return room.members.some(member =>
        member.username.toLowerCase().includes(search.toLowerCase())
      );
    });

    this.setState({
      search: search,
      open: search.length > 0,
      rooms: filterRooms
    });
  }

  searchUsers(username) {
    this.setState({
      pendingDBCall: false
    });
    this.props.handleSearch(username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialRooms !== prevProps.initialRooms) {
      this.setState({
        rooms: this.props.initialRooms
      });
    }

    if (prevProps.blocks !== this.props.blocks) {
      this.syncSearch(this.state.search);
    } else if (
      this.state.pendingDBCall &&
      this.props.userSearchStatus !== "loading"
    ) {
      // The db has finished its latest search
      // Call it again with the updated search
      this.searchUsers(this.state.search);
    }
    if (this.state.open === true) {
      this.searchFieldRef.setFocus();
    }
  }

  componentDidMount() {
    if (this.props.friendsSearchFocus === true) {
      this.searchFieldRef.setFocus();
    }
  }
  componentWillUnmount() {
    this.props.setFriendsSearchFocus(false);
  }

  render() {
    return (
      <div className="relative flex flex-col w-screen sm:w-84 h-withoutHeader overflow-y-auto bg-background-primary select-none">
        <div className="py-2 px-4">
          <Button
            styleNone
            icon="arrow-left"
            styleNoneContent={strings.backToChannels}
            className="text-copy-link hover:underline space-x-2 text-sm"
            onClick={() => this.props.updateSelectedPage("channels")}
          />
        </div>
        <LeftPanelSubHeader
          headerString={
            !this.state.open ? strings.directRoom : strings.searchFriends
          }
          button="pen"
          onClick={() => this.props.handleCreateRoom()}
          tooltip={strings.newRoomButton}
          analyticsString="Create Room Button: FriendsPanel"
        />
        {!this.state.open && (
          <div className="px-3">
            <Button
              styleNone
              icon="search"
              styleNoneIconClassName="text-copy-secondary mr-3"
              styleNoneContent={strings.searchFriendsInput}
              styleNoneContentClassName="text-sm text-copy-secondary"
              className="flex items-center px-3 w-full h-10 bg-background-tertiary rounded-lg cursor-text"
              onClick={() => this.setState({ open: true })}
            />
          </div>
        )}
        {this.state.open ? (
          <>
            <div className="flex items-center space-x-2 w-full px-2">
              <Button
                styleNone
                icon="arrow-left"
                className="text-copy-secondary w-10 h-10 hover:bg-background-secondary rounded-circle flex-shrink-0"
                onClick={() => this.syncSearch("")}
              />
              <Input
                variant="user"
                size="sm"
                value={this.state.search}
                placeholder={strings.searchFriendsInput}
                onChange={e => this.syncSearch(e.target.value)}
                onClick={() => this.syncSearch(this.state.search)}
                forwardedRef={this.searchFieldRef.ref}
                className="w-full"
              />
            </div>
            <div className="flex w-full h-full">
              <StretchList
                list={FriendUsersList}
                users={this.props.userSearchResults}
                handleProfile={this.props.handleProfile}
              />
            </div>
          </>
        ) : (
          <div className="bg-background-primary pb-8">
            <RoomsList
              rooms={this.state.rooms}
              selected={this.props.selectedRoom}
              handleSelect={this.props.handleSelectRoom}
              fullHeight={true}
              isLoading={false}
            />
          </div>
        )}
        <ReactTooltip
          effect="solid"
          backgroundColor="#F2F2F2"
          textColor="black"
          className="shadow-md rounded-md py-1 px-3 opacity-100"
          arrowColor="transparent"
        />
      </div>
    );
  }
}

export default FriendsPanel;
