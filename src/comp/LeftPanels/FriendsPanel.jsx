import React, { Component } from "react";
import Button from "../Controls/Button";
import FriendUsersList from "../InfoCardLists/FriendUsersList";
import StretchList from "../InfoCardLists/StretchList";
import Input from "../Controls/Input";
import RoomsList from "../InfoCardLists/RoomsList";
import PanelHeader from "./PanelHeader";
import { utilizeFocus } from "../../helpers/functions";

class FriendsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      open: false,
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
    if (this.props.friendsSearchFocus) {
      this.props.setFriendsSearchFocus(false);
    }

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
  }

  componentDidMount() {
    if (this.props.friendsSearchFocus) {
      this.searchFieldRef.setFocus();
    }
  }

  render() {
    return (
      <div className="flex flex-col w-84 h-full bg-primaryBackground select-none">
        <PanelHeader
          handleCollapse={this.props.handleCollapse}
          updateSelectedPage={this.props.updateSelectedPage}
          selectedPage={this.props.selectedPage}
        />
        <div className="flex-col h-full overflow-y-scroll">
          <Input
            variant="user"
            size="sm"
            value={this.state.search}
            placeholder="Search Username"
            onChange={e => this.syncSearch(e.target.value)}
            onClick={() => this.syncSearch(this.state.search)}
            forwardedRef={this.searchFieldRef.ref}
            className="m-2 mx-3"
          />
          {this.state.open && (
            <div className="rounded-md bg-secondaryBackground shadow-inner border border-primaryBorder mx-3 m-2">
              <div className="flex flex-row items-center justify-between ml-2 px-2 py-1">
                <p className="text-xs">
                  Results for &quot;{this.state.search}&quot;
                </p>
                <button
                  className="flex text-xs font-bold text-highlightText focus:outline-none px-2 py-1 rounded-xl transition-all hover:bg-highlightBackground duration-100"
                  onClick={() => this.syncSearch("")}
                >
                  Close
                </button>
              </div>
              <div className="flex w-full h-64 px-1 rounded-lg">
                <StretchList
                  list={FriendUsersList}
                  users={this.props.userSearchResults}
                  handleProfile={this.props.handleProfile}
                />
              </div>
            </div>
          )}
          <div className="bg-primaryBackground px-1 pb-2">
            <RoomsList
              rooms={this.state.rooms}
              selected={this.props.selectedRoom}
              handleSelect={this.props.handleSelectRoom}
              fullHeight={true}
            />
          </div>
          <Button
            size="md"
            leftIcon="plus"
            className="fixed bottom-0 left-0 ml-44 mb-4 hover:opacity-100 hover:scale-105 shadow-channel"
            onClickEvent={() => this.props.handleCreateRoom()}
            analyticsString="Create Room Button: FriendsPanel"
          >
            New Room
          </Button>
        </div>
      </div>
    );
  }
}

export default FriendsPanel;
