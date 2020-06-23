import React, { useState, Component } from "react";
import Button from "../Button";
import FriendUsersList from "../InfoCardLists/FriendUsersList";
import StretchList from "../InfoCardLists/StretchList";
import Input from "../Input";
import RoomsList from "../InfoCardLists/RoomsList";
import PanelHeader from "./PanelHeader";

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
    if (prevProps.blocks !== this.props.blocks) {
      this.syncSearch(this.state.search);
    } else if (
      this.state.pendingDBCall &&
      this.props.userSearchStatus !== "loading"
    ) {
      // The db has finished its latest search
      // Call it again with the updated search
      this.searchUsers();
    }
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col bg-primaryBackground xl:w-84 lg:w-84 md:w-84 sm:w-84">
        <PanelHeader
          handleCollapse={this.props.handleCollapse}
          updateSelectedPage={this.props.updateSelectedPage}
          selectedPage={this.props.selectedPage}
        />
        <div className="mt-2 mx-4">
          <Input
            variant="user"
            size="sm"
            value={this.state.search}
            placeholder="Search with username"
            onChange={e => this.syncSearch(e.target.value)}
            onClick={() => this.syncSearch(this.state.search)}
          />
        </div>
        {this.state.open && (
          <div className="rounded-lg bg-secondaryBackground shadow-inner mx-2 mt-2">
            <div className="flex justify-between px-3 py-1 space-x-1">
              <div>
                <span className="text-xs">Results for </span>
                <span className="text-xs font-bold">{this.state.search}</span>
              </div>
              <div>
                <span
                  role="button"
                  className="text-xs font-semibold no-underline cursor-pointer text-highlightText"
                  onClick={() => this.syncSearch("")}
                >
                  Close
                </span>
              </div>
            </div>
            <div className="flex w-full h-64">
              <StretchList
                list={FriendUsersList}
                users={this.props.userSearchResults}
                handleProfile={this.props.handleProfile}
              />
            </div>
          </div>
        )}
        <div className="bg-primaryBackground px-2 pt-2">
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
          className="fixed bottom-0 left-0 ml-44 mb-4 opacity-50 hover:opacity-100"
        >
          New Room
        </Button>
      </div>
    );
  }
}

export default FriendsPanel;
